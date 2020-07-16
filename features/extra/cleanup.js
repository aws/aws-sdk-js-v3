const { S3 } = require("../../clients/client-s3");
const { AfterAll } = require("cucumber");

/**
 * Cleanup fixtures and resources. The world does not exist when
 * this handler is executed. Only resource cleanup and shutdown
 * should happen here.
 */
AfterAll(async () => {
  const path = require("path");
  const fs = require("fs");
  const filePath = path.resolve("integ.buckets.json");

  try {
    if (!fs.existsSync(filePath)) return Promise.resolve();
    deleteFixtures();
    const cache = JSON.parse(fs.readFileSync(filePath));
    const buckets = cache.buckets;
    if (buckets.length) {
      for (let i = 0; i < buckets.length; i++) {
        await cleanBucket(buckets[i]);
      }
    } else {
      return Promise.resolve();
    }
  } catch (fileErr) {
    return Promise.reject(fileErr);
  } finally {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
});

/**
 * Delete fixtures
 */
const deleteFixtures = function () {
  const fs = require("fs");
  const path = require("path");
  const fixturePath = path.resolve("./features/extra/fixtures/tmp");
  if (fs.existsSync(fixturePath)) {
    fs.readdirSync(fixturePath).forEach(function (file) {
      fs.unlinkSync(path.join(fixturePath, file));
    });
    fs.rmdirSync(fixturePath);
  }
};

/*
 * Delete objects and then bucket.
 */
const cleanBucket = async (bucket) => {
  await deleteObjects(bucket);
  await deleteBucket(bucket);
};

/*
 * Delete bucket
 */
const deleteBucket = async (bucket) => {
  const s3 = new S3({ maxRetries: 100 });
  return s3.deleteBucket({ Bucket: bucket });
};

/**
 * Delete objects.
 */
const deleteObjects = async (bucket) => {
  const s3 = new S3({ maxRetries: 100 });
  const params = {
    Bucket: bucket,
  };

  const data = await s3.listObjects(params);
  if (data.Contents && data.Contents.length > 0) {
    params.Delete = { Objects: [] };
    data.Contents.forEach(function (item) {
      params.Delete.Objects.push({ Key: item.Key });
    });
    await s3.deleteObjects(params);
  }
};

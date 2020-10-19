import { Upload } from "../src/index";
import { S3, S3Client } from "@aws-sdk/client-s3";

const Bucket = "aws-sdk-js-mock-files";
const Key = "data_key";
const Body =
  "Duo Reges: constructio interrete. Qui autem esse poteris, nisi te amor ipse ceperit? Hoc est non modo cor non habere, sed ne palatum quidem. Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Sed quid attinet de rebus tam apertis plura requirere? Non quam nostram quidem, inquit Pomponius iocans; Alterum significari idem, ut si diceretur, officia media omnia aut pleraque servantem vivere. Stoici scilicet";

(async () => {
  const target = { Bucket, Key, Body };
  try {
    const paralellUploads3 = new Upload({
      client: new S3({}),
      params: target,
    });

    paralellUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });

    await paralellUploads3.done();
  } catch (e) {
    console.log(e);
  }

  try {
    const paralellUploads3Client = new Upload({
      client: new S3Client({}),
      params: target,
    });

    paralellUploads3Client.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });

    await paralellUploads3Client.done();
  } catch (e) {
    console.log(e);
  }
})();

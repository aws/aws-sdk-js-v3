# @aws-sdk/ec2-metadata-service

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/ec2-metadata-service/latest.svg)](https://www.npmjs.com/package/@aws-sdk/ec2-metadata-service)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/ec2-metadata-service.svg)](https://www.npmjs.com/package/@aws-sdk/ec2-metadata-service)

This package provides utils to access [EC2 Instance Metadata Service (IMDS)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) from the AWS SDK for JavaScript v3.

### Usage

The basic usage of EC2 IMDS utils in the AWS SDK for JavaScript v3 is as follows:

JavaScript example

```JavaScript
const { MetadataService } = require("@aws-sdk/ec2-metadata-service");

const metadataService = new MetadataService({});
const token = await metadataService.fetchMetadataToken(); // fetches token explicitly
const metadata = await metadataService.request("/latest/meta-data/", {}); // request metadata from IMDSv2 (uses a token to make the request by default if `disableFetchToken` is not set to true)
```

ES6 example

```JavaScript
import { MetadataService } from "@aws-sdk/ec2-metadata-service";

const metadataService = new MetadataService({});
const token = await metadataService.fetchMetadataToken(); // fetches token explicitly
const metadata = await metadataService.request("/latest/meta-data/", {}); // request metadata from IMDSv2 (uses a token to make the request by default if `disableFetchToken` is not set to true)
```

### Notes

Note that by default, requests to IMDS are in accordance with [IMDSv2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html).

Read more about Instance Metadata here: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html

The @aws-sdk/ec2-metadata-service package is a standalone utility and not part of the default credential provider chain. If you want to use IMDS for credentials, you can use the [fromInstanceMetadata()](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/Variable/fromInstanceMetadata/) method.

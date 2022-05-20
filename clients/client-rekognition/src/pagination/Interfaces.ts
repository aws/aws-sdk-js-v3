// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Rekognition } from "../Rekognition";
import { RekognitionClient } from "../RekognitionClient";

export interface RekognitionPaginationConfiguration extends PaginationConfiguration {
  client: Rekognition | RekognitionClient;
}

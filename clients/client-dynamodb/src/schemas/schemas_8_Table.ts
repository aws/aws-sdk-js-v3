// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACDTP,
  _DKSD,
  _DKSDI,
  _DKSDi,
  _DKSDO,
  _DS,
  _DSD,
  _EKSC,
  _EKSD,
  _KDSD,
  _KDSDi,
  _KSDI,
  _KSDO,
  _SA,
  _TN,
  _UKSC,
  _UKSD,
  _UKSDI,
  _UKSDO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeKinesisStreamingDestinationInput = struct(n0, _DKSDI, 0, [_TN], [0]);
export var DescribeKinesisStreamingDestinationOutput = struct(
  n0,
  _DKSDO,
  0,
  [_TN, _KDSD],
  [0, () => KinesisDataStreamDestinations]
);
export var EnableKinesisStreamingConfiguration = struct(n0, _EKSC, 0, [_ACDTP], [0]);
export var KinesisDataStreamDestination = struct(n0, _KDSDi, 0, [_SA, _DS, _DSD, _ACDTP], [0, 0, 0, 0]);
export var KinesisStreamingDestinationInput = struct(
  n0,
  _KSDI,
  0,
  [_TN, _SA, _EKSC],
  [0, 0, () => EnableKinesisStreamingConfiguration]
);
export var KinesisStreamingDestinationOutput = struct(
  n0,
  _KSDO,
  0,
  [_TN, _SA, _DS, _EKSC],
  [0, 0, 0, () => EnableKinesisStreamingConfiguration]
);
export var UpdateKinesisStreamingConfiguration = struct(n0, _UKSC, 0, [_ACDTP], [0]);
export var UpdateKinesisStreamingDestinationInput = struct(
  n0,
  _UKSDI,
  0,
  [_TN, _SA, _UKSC],
  [0, 0, () => UpdateKinesisStreamingConfiguration]
);
export var UpdateKinesisStreamingDestinationOutput = struct(
  n0,
  _UKSDO,
  0,
  [_TN, _SA, _DS, _UKSC],
  [0, 0, 0, () => UpdateKinesisStreamingConfiguration]
);
export var KinesisDataStreamDestinations = list(n0, _KDSD, 0, () => KinesisDataStreamDestination);
export var DescribeKinesisStreamingDestination = op(
  n0,
  _DKSD,
  0,
  () => DescribeKinesisStreamingDestinationInput,
  () => DescribeKinesisStreamingDestinationOutput
);
export var DisableKinesisStreamingDestination = op(
  n0,
  _DKSDi,
  0,
  () => KinesisStreamingDestinationInput,
  () => KinesisStreamingDestinationOutput
);
export var EnableKinesisStreamingDestination = op(
  n0,
  _EKSD,
  0,
  () => KinesisStreamingDestinationInput,
  () => KinesisStreamingDestinationOutput
);
export var UpdateKinesisStreamingDestination = op(
  n0,
  _UKSD,
  0,
  () => UpdateKinesisStreamingDestinationInput,
  () => UpdateKinesisStreamingDestinationOutput
);

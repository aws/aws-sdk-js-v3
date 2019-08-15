import { _ChannelActivity } from "./_ChannelActivity";
import { _LambdaActivity } from "./_LambdaActivity";
import { _DatastoreActivity } from "./_DatastoreActivity";
import { _AddAttributesActivity } from "./_AddAttributesActivity";
import { _RemoveAttributesActivity } from "./_RemoveAttributesActivity";
import { _SelectAttributesActivity } from "./_SelectAttributesActivity";
import { _FilterActivity } from "./_FilterActivity";
import { _MathActivity } from "./_MathActivity";
import { _DeviceRegistryEnrichActivity } from "./_DeviceRegistryEnrichActivity";
import { _DeviceShadowEnrichActivity } from "./_DeviceShadowEnrichActivity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineActivity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    channel: {
      shape: _ChannelActivity
    },
    lambda: {
      shape: _LambdaActivity
    },
    datastore: {
      shape: _DatastoreActivity
    },
    addAttributes: {
      shape: _AddAttributesActivity
    },
    removeAttributes: {
      shape: _RemoveAttributesActivity
    },
    selectAttributes: {
      shape: _SelectAttributesActivity
    },
    filter: {
      shape: _FilterActivity
    },
    math: {
      shape: _MathActivity
    },
    deviceRegistryEnrich: {
      shape: _DeviceRegistryEnrichActivity
    },
    deviceShadowEnrich: {
      shape: _DeviceShadowEnrichActivity
    }
  }
};

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UploadEntityDefinitionsRequest, UploadEntityDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UploadEntityDefinitionsCommandInput = UploadEntityDefinitionsRequest;
export declare type UploadEntityDefinitionsCommandOutput = UploadEntityDefinitionsResponse & __MetadataBearer;
export declare class UploadEntityDefinitionsCommand extends $Command<UploadEntityDefinitionsCommandInput, UploadEntityDefinitionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UploadEntityDefinitionsCommandInput;
    constructor(input: UploadEntityDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadEntityDefinitionsCommandInput, UploadEntityDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}

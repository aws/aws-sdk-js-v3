import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateDetectorVersionMetadataRequest, UpdateDetectorVersionMetadataResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDetectorVersionMetadataCommandInput = UpdateDetectorVersionMetadataRequest;
export declare type UpdateDetectorVersionMetadataCommandOutput = UpdateDetectorVersionMetadataResult & __MetadataBearer;
export declare class UpdateDetectorVersionMetadataCommand extends $Command<UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateDetectorVersionMetadataCommandInput;
    constructor(input: UpdateDetectorVersionMetadataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput>;
    private serialize;
    private deserialize;
}

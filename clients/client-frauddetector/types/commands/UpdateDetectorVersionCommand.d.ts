import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateDetectorVersionRequest, UpdateDetectorVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDetectorVersionCommandInput = UpdateDetectorVersionRequest;
export declare type UpdateDetectorVersionCommandOutput = UpdateDetectorVersionResult & __MetadataBearer;
export declare class UpdateDetectorVersionCommand extends $Command<UpdateDetectorVersionCommandInput, UpdateDetectorVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateDetectorVersionCommandInput;
    constructor(input: UpdateDetectorVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDetectorVersionCommandInput, UpdateDetectorVersionCommandOutput>;
    private serialize;
    private deserialize;
}

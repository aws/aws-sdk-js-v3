import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateDetectorVersionStatusRequest, UpdateDetectorVersionStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDetectorVersionStatusCommandInput = UpdateDetectorVersionStatusRequest;
export declare type UpdateDetectorVersionStatusCommandOutput = UpdateDetectorVersionStatusResult & __MetadataBearer;
export declare class UpdateDetectorVersionStatusCommand extends $Command<UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateDetectorVersionStatusCommandInput;
    constructor(input: UpdateDetectorVersionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput>;
    private serialize;
    private deserialize;
}

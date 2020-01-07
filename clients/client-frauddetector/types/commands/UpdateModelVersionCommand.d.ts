import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateModelVersionRequest, UpdateModelVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateModelVersionCommandInput = UpdateModelVersionRequest;
export declare type UpdateModelVersionCommandOutput = UpdateModelVersionResult & __MetadataBearer;
export declare class UpdateModelVersionCommand extends $Command<UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateModelVersionCommandInput;
    constructor(input: UpdateModelVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput>;
    private serialize;
    private deserialize;
}

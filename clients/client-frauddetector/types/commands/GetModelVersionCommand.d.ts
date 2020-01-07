import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetModelVersionRequest, GetModelVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetModelVersionCommandInput = GetModelVersionRequest;
export declare type GetModelVersionCommandOutput = GetModelVersionResult & __MetadataBearer;
export declare class GetModelVersionCommand extends $Command<GetModelVersionCommandInput, GetModelVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetModelVersionCommandInput;
    constructor(input: GetModelVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetModelVersionCommandInput, GetModelVersionCommandOutput>;
    private serialize;
    private deserialize;
}

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetModelsRequest, GetModelsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetModelsCommandInput = GetModelsRequest;
export declare type GetModelsCommandOutput = GetModelsResult & __MetadataBearer;
export declare class GetModelsCommand extends $Command<GetModelsCommandInput, GetModelsCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetModelsCommandInput;
    constructor(input: GetModelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetModelsCommandInput, GetModelsCommandOutput>;
    private serialize;
    private deserialize;
}

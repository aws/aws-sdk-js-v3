import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetExternalModelsRequest, GetExternalModelsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetExternalModelsCommandInput = GetExternalModelsRequest;
export declare type GetExternalModelsCommandOutput = GetExternalModelsResult & __MetadataBearer;
export declare class GetExternalModelsCommand extends $Command<GetExternalModelsCommandInput, GetExternalModelsCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetExternalModelsCommandInput;
    constructor(input: GetExternalModelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExternalModelsCommandInput, GetExternalModelsCommandOutput>;
    private serialize;
    private deserialize;
}

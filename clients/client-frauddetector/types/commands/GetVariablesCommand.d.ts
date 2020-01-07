import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetVariablesRequest, GetVariablesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetVariablesCommandInput = GetVariablesRequest;
export declare type GetVariablesCommandOutput = GetVariablesResult & __MetadataBearer;
export declare class GetVariablesCommand extends $Command<GetVariablesCommandInput, GetVariablesCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetVariablesCommandInput;
    constructor(input: GetVariablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVariablesCommandInput, GetVariablesCommandOutput>;
    private serialize;
    private deserialize;
}

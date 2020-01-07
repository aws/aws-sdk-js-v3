import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetRulesRequest, GetRulesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRulesCommandInput = GetRulesRequest;
export declare type GetRulesCommandOutput = GetRulesResult & __MetadataBearer;
export declare class GetRulesCommand extends $Command<GetRulesCommandInput, GetRulesCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetRulesCommandInput;
    constructor(input: GetRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRulesCommandInput, GetRulesCommandOutput>;
    private serialize;
    private deserialize;
}

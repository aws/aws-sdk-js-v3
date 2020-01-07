import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetSqlInjectionMatchSetRequest, GetSqlInjectionMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSqlInjectionMatchSetCommandInput = GetSqlInjectionMatchSetRequest;
export declare type GetSqlInjectionMatchSetCommandOutput = GetSqlInjectionMatchSetResponse & __MetadataBearer;
export declare class GetSqlInjectionMatchSetCommand extends $Command<GetSqlInjectionMatchSetCommandInput, GetSqlInjectionMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetSqlInjectionMatchSetCommandInput;
    constructor(input: GetSqlInjectionMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSqlInjectionMatchSetCommandInput, GetSqlInjectionMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}

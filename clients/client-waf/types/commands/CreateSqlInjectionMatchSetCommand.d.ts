import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateSqlInjectionMatchSetRequest, CreateSqlInjectionMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSqlInjectionMatchSetCommandInput = CreateSqlInjectionMatchSetRequest;
export declare type CreateSqlInjectionMatchSetCommandOutput = CreateSqlInjectionMatchSetResponse & __MetadataBearer;
export declare class CreateSqlInjectionMatchSetCommand extends $Command<CreateSqlInjectionMatchSetCommandInput, CreateSqlInjectionMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateSqlInjectionMatchSetCommandInput;
    constructor(input: CreateSqlInjectionMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSqlInjectionMatchSetCommandInput, CreateSqlInjectionMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}

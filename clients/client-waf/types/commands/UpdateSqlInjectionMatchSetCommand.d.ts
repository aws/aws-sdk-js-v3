import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { UpdateSqlInjectionMatchSetRequest, UpdateSqlInjectionMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSqlInjectionMatchSetCommandInput = UpdateSqlInjectionMatchSetRequest;
export declare type UpdateSqlInjectionMatchSetCommandOutput = UpdateSqlInjectionMatchSetResponse & __MetadataBearer;
export declare class UpdateSqlInjectionMatchSetCommand extends $Command<UpdateSqlInjectionMatchSetCommandInput, UpdateSqlInjectionMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: UpdateSqlInjectionMatchSetCommandInput;
    constructor(input: UpdateSqlInjectionMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSqlInjectionMatchSetCommandInput, UpdateSqlInjectionMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}

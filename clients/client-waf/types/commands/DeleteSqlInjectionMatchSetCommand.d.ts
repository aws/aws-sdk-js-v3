import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteSqlInjectionMatchSetRequest, DeleteSqlInjectionMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSqlInjectionMatchSetCommandInput = DeleteSqlInjectionMatchSetRequest;
export declare type DeleteSqlInjectionMatchSetCommandOutput = DeleteSqlInjectionMatchSetResponse & __MetadataBearer;
export declare class DeleteSqlInjectionMatchSetCommand extends $Command<DeleteSqlInjectionMatchSetCommandInput, DeleteSqlInjectionMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: DeleteSqlInjectionMatchSetCommandInput;
    constructor(input: DeleteSqlInjectionMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSqlInjectionMatchSetCommandInput, DeleteSqlInjectionMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}

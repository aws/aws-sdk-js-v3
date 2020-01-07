import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeleteAliasRequest, DeleteAliasResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAliasCommandInput = DeleteAliasRequest;
export declare type DeleteAliasCommandOutput = DeleteAliasResponse & __MetadataBearer;
export declare class DeleteAliasCommand extends $Command<DeleteAliasCommandInput, DeleteAliasCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeleteAliasCommandInput;
    constructor(input: DeleteAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAliasCommandInput, DeleteAliasCommandOutput>;
    private serialize;
    private deserialize;
}

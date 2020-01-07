import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DeleteAliasRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAliasCommandInput = DeleteAliasRequest;
export declare type DeleteAliasCommandOutput = __MetadataBearer;
export declare class DeleteAliasCommand extends $Command<DeleteAliasCommandInput, DeleteAliasCommandOutput, KMSClientResolvedConfig> {
    readonly input: DeleteAliasCommandInput;
    constructor(input: DeleteAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAliasCommandInput, DeleteAliasCommandOutput>;
    private serialize;
    private deserialize;
}

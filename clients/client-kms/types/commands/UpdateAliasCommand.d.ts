import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateAliasRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAliasCommandInput = UpdateAliasRequest;
export declare type UpdateAliasCommandOutput = __MetadataBearer;
export declare class UpdateAliasCommand extends $Command<UpdateAliasCommandInput, UpdateAliasCommandOutput, KMSClientResolvedConfig> {
    readonly input: UpdateAliasCommandInput;
    constructor(input: UpdateAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAliasCommandInput, UpdateAliasCommandOutput>;
    private serialize;
    private deserialize;
}

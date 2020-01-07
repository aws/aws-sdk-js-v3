import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConnectionCommandInput = UpdateConnectionRequest;
export declare type UpdateConnectionCommandOutput = UpdateConnectionResponse & __MetadataBearer;
export declare class UpdateConnectionCommand extends $Command<UpdateConnectionCommandInput, UpdateConnectionCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateConnectionCommandInput;
    constructor(input: UpdateConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConnectionCommandInput, UpdateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

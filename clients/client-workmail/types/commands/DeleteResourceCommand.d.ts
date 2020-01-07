import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeleteResourceRequest, DeleteResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResourceCommandInput = DeleteResourceRequest;
export declare type DeleteResourceCommandOutput = DeleteResourceResponse & __MetadataBearer;
export declare class DeleteResourceCommand extends $Command<DeleteResourceCommandInput, DeleteResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeleteResourceCommandInput;
    constructor(input: DeleteResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceCommandInput, DeleteResourceCommandOutput>;
    private serialize;
    private deserialize;
}

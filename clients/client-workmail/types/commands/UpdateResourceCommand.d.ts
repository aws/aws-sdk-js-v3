import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdateResourceRequest, UpdateResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateResourceCommandInput = UpdateResourceRequest;
export declare type UpdateResourceCommandOutput = UpdateResourceResponse & __MetadataBearer;
export declare class UpdateResourceCommand extends $Command<UpdateResourceCommandInput, UpdateResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: UpdateResourceCommandInput;
    constructor(input: UpdateResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceCommandInput, UpdateResourceCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeleteGroupRequest, DeleteGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGroupCommandInput = DeleteGroupRequest;
export declare type DeleteGroupCommandOutput = DeleteGroupResponse & __MetadataBearer;
export declare class DeleteGroupCommand extends $Command<DeleteGroupCommandInput, DeleteGroupCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeleteGroupCommandInput;
    constructor(input: DeleteGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGroupCommandInput, DeleteGroupCommandOutput>;
    private serialize;
    private deserialize;
}

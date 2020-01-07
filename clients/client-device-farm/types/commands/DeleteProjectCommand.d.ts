import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteProjectRequest, DeleteProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProjectCommandInput = DeleteProjectRequest;
export declare type DeleteProjectCommandOutput = DeleteProjectResult & __MetadataBearer;
export declare class DeleteProjectCommand extends $Command<DeleteProjectCommandInput, DeleteProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteProjectCommandInput;
    constructor(input: DeleteProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProjectCommandInput, DeleteProjectCommandOutput>;
    private serialize;
    private deserialize;
}

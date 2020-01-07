import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateProjectRequest, UpdateProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProjectCommandInput = UpdateProjectRequest;
export declare type UpdateProjectCommandOutput = UpdateProjectResult & __MetadataBearer;
export declare class UpdateProjectCommand extends $Command<UpdateProjectCommandInput, UpdateProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateProjectCommandInput;
    constructor(input: UpdateProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProjectCommandInput, UpdateProjectCommandOutput>;
    private serialize;
    private deserialize;
}

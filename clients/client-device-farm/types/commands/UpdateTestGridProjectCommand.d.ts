import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateTestGridProjectRequest, UpdateTestGridProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTestGridProjectCommandInput = UpdateTestGridProjectRequest;
export declare type UpdateTestGridProjectCommandOutput = UpdateTestGridProjectResult & __MetadataBearer;
export declare class UpdateTestGridProjectCommand extends $Command<UpdateTestGridProjectCommandInput, UpdateTestGridProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateTestGridProjectCommandInput;
    constructor(input: UpdateTestGridProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTestGridProjectCommandInput, UpdateTestGridProjectCommandOutput>;
    private serialize;
    private deserialize;
}

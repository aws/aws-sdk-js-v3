import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateTestGridProjectRequest, CreateTestGridProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTestGridProjectCommandInput = CreateTestGridProjectRequest;
export declare type CreateTestGridProjectCommandOutput = CreateTestGridProjectResult & __MetadataBearer;
export declare class CreateTestGridProjectCommand extends $Command<CreateTestGridProjectCommandInput, CreateTestGridProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateTestGridProjectCommandInput;
    constructor(input: CreateTestGridProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTestGridProjectCommandInput, CreateTestGridProjectCommandOutput>;
    private serialize;
    private deserialize;
}

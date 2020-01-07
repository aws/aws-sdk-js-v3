import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteTestGridProjectRequest, DeleteTestGridProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTestGridProjectCommandInput = DeleteTestGridProjectRequest;
export declare type DeleteTestGridProjectCommandOutput = DeleteTestGridProjectResult & __MetadataBearer;
export declare class DeleteTestGridProjectCommand extends $Command<DeleteTestGridProjectCommandInput, DeleteTestGridProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteTestGridProjectCommandInput;
    constructor(input: DeleteTestGridProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTestGridProjectCommandInput, DeleteTestGridProjectCommandOutput>;
    private serialize;
    private deserialize;
}

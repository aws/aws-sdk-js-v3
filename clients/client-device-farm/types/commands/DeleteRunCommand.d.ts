import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteRunRequest, DeleteRunResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRunCommandInput = DeleteRunRequest;
export declare type DeleteRunCommandOutput = DeleteRunResult & __MetadataBearer;
export declare class DeleteRunCommand extends $Command<DeleteRunCommandInput, DeleteRunCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteRunCommandInput;
    constructor(input: DeleteRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRunCommandInput, DeleteRunCommandOutput>;
    private serialize;
    private deserialize;
}

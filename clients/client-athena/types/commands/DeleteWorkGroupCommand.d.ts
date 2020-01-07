import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { DeleteWorkGroupInput, DeleteWorkGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWorkGroupCommandInput = DeleteWorkGroupInput;
export declare type DeleteWorkGroupCommandOutput = DeleteWorkGroupOutput & __MetadataBearer;
export declare class DeleteWorkGroupCommand extends $Command<DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput, AthenaClientResolvedConfig> {
    readonly input: DeleteWorkGroupCommandInput;
    constructor(input: DeleteWorkGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput>;
    private serialize;
    private deserialize;
}

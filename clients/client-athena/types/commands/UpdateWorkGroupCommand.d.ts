import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdateWorkGroupInput, UpdateWorkGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateWorkGroupCommandInput = UpdateWorkGroupInput;
export declare type UpdateWorkGroupCommandOutput = UpdateWorkGroupOutput & __MetadataBearer;
export declare class UpdateWorkGroupCommand extends $Command<UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput, AthenaClientResolvedConfig> {
    readonly input: UpdateWorkGroupCommandInput;
    constructor(input: UpdateWorkGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput>;
    private serialize;
    private deserialize;
}

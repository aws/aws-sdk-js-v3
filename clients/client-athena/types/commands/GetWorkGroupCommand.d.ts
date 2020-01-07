import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetWorkGroupInput, GetWorkGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWorkGroupCommandInput = GetWorkGroupInput;
export declare type GetWorkGroupCommandOutput = GetWorkGroupOutput & __MetadataBearer;
export declare class GetWorkGroupCommand extends $Command<GetWorkGroupCommandInput, GetWorkGroupCommandOutput, AthenaClientResolvedConfig> {
    readonly input: GetWorkGroupCommandInput;
    constructor(input: GetWorkGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkGroupCommandInput, GetWorkGroupCommandOutput>;
    private serialize;
    private deserialize;
}

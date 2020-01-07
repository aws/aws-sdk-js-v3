import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { GetActivityTaskInput, GetActivityTaskOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetActivityTaskCommandInput = GetActivityTaskInput;
export declare type GetActivityTaskCommandOutput = GetActivityTaskOutput & __MetadataBearer;
export declare class GetActivityTaskCommand extends $Command<GetActivityTaskCommandInput, GetActivityTaskCommandOutput, SFNClientResolvedConfig> {
    readonly input: GetActivityTaskCommandInput;
    constructor(input: GetActivityTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetActivityTaskCommandInput, GetActivityTaskCommandOutput>;
    private serialize;
    private deserialize;
}

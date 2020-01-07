import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { CreateActivityInput, CreateActivityOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateActivityCommandInput = CreateActivityInput;
export declare type CreateActivityCommandOutput = CreateActivityOutput & __MetadataBearer;
export declare class CreateActivityCommand extends $Command<CreateActivityCommandInput, CreateActivityCommandOutput, SFNClientResolvedConfig> {
    readonly input: CreateActivityCommandInput;
    constructor(input: CreateActivityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateActivityCommandInput, CreateActivityCommandOutput>;
    private serialize;
    private deserialize;
}

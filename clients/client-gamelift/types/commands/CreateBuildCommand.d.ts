import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateBuildInput, CreateBuildOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBuildCommandInput = CreateBuildInput;
export declare type CreateBuildCommandOutput = CreateBuildOutput & __MetadataBearer;
export declare class CreateBuildCommand extends $Command<CreateBuildCommandInput, CreateBuildCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateBuildCommandInput;
    constructor(input: CreateBuildCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBuildCommandInput, CreateBuildCommandOutput>;
    private serialize;
    private deserialize;
}

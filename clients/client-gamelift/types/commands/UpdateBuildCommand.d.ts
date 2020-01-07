import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateBuildInput, UpdateBuildOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateBuildCommandInput = UpdateBuildInput;
export declare type UpdateBuildCommandOutput = UpdateBuildOutput & __MetadataBearer;
export declare class UpdateBuildCommand extends $Command<UpdateBuildCommandInput, UpdateBuildCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateBuildCommandInput;
    constructor(input: UpdateBuildCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBuildCommandInput, UpdateBuildCommandOutput>;
    private serialize;
    private deserialize;
}

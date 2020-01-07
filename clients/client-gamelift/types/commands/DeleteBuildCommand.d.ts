import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteBuildInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBuildCommandInput = DeleteBuildInput;
export declare type DeleteBuildCommandOutput = __MetadataBearer;
export declare class DeleteBuildCommand extends $Command<DeleteBuildCommandInput, DeleteBuildCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteBuildCommandInput;
    constructor(input: DeleteBuildCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBuildCommandInput, DeleteBuildCommandOutput>;
    private serialize;
    private deserialize;
}

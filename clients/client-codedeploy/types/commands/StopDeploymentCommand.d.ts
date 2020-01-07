import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { StopDeploymentInput, StopDeploymentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopDeploymentCommandInput = StopDeploymentInput;
export declare type StopDeploymentCommandOutput = StopDeploymentOutput & __MetadataBearer;
export declare class StopDeploymentCommand extends $Command<StopDeploymentCommandInput, StopDeploymentCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: StopDeploymentCommandInput;
    constructor(input: StopDeploymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDeploymentCommandInput, StopDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}

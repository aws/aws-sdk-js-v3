import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentTargetInput, GetDeploymentTargetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeploymentTargetCommandInput = GetDeploymentTargetInput;
export declare type GetDeploymentTargetCommandOutput = GetDeploymentTargetOutput & __MetadataBearer;
export declare class GetDeploymentTargetCommand extends $Command<GetDeploymentTargetCommandInput, GetDeploymentTargetCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetDeploymentTargetCommandInput;
    constructor(input: GetDeploymentTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentTargetCommandInput, GetDeploymentTargetCommandOutput>;
    private serialize;
    private deserialize;
}

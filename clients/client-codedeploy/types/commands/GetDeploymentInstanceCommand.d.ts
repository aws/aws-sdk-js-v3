import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentInstanceInput, GetDeploymentInstanceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeploymentInstanceCommandInput = GetDeploymentInstanceInput;
export declare type GetDeploymentInstanceCommandOutput = GetDeploymentInstanceOutput & __MetadataBearer;
export declare class GetDeploymentInstanceCommand extends $Command<GetDeploymentInstanceCommandInput, GetDeploymentInstanceCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetDeploymentInstanceCommandInput;
    constructor(input: GetDeploymentInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentInstanceCommandInput, GetDeploymentInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentInput, GetDeploymentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeploymentCommandInput = GetDeploymentInput;
export declare type GetDeploymentCommandOutput = GetDeploymentOutput & __MetadataBearer;
export declare class GetDeploymentCommand extends $Command<GetDeploymentCommandInput, GetDeploymentCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetDeploymentCommandInput;
    constructor(input: GetDeploymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentCommandInput, GetDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}

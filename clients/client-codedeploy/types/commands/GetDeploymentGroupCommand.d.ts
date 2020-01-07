import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentGroupInput, GetDeploymentGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeploymentGroupCommandInput = GetDeploymentGroupInput;
export declare type GetDeploymentGroupCommandOutput = GetDeploymentGroupOutput & __MetadataBearer;
export declare class GetDeploymentGroupCommand extends $Command<GetDeploymentGroupCommandInput, GetDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetDeploymentGroupCommandInput;
    constructor(input: GetDeploymentGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentGroupCommandInput, GetDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}

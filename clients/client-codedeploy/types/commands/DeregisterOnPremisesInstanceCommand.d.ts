import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeregisterOnPremisesInstanceInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterOnPremisesInstanceCommandInput = DeregisterOnPremisesInstanceInput;
export declare type DeregisterOnPremisesInstanceCommandOutput = __MetadataBearer;
export declare class DeregisterOnPremisesInstanceCommand extends $Command<DeregisterOnPremisesInstanceCommandInput, DeregisterOnPremisesInstanceCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeregisterOnPremisesInstanceCommandInput;
    constructor(input: DeregisterOnPremisesInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterOnPremisesInstanceCommandInput, DeregisterOnPremisesInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

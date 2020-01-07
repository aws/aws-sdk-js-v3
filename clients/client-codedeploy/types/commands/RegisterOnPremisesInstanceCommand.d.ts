import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RegisterOnPremisesInstanceInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterOnPremisesInstanceCommandInput = RegisterOnPremisesInstanceInput;
export declare type RegisterOnPremisesInstanceCommandOutput = __MetadataBearer;
export declare class RegisterOnPremisesInstanceCommand extends $Command<RegisterOnPremisesInstanceCommandInput, RegisterOnPremisesInstanceCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: RegisterOnPremisesInstanceCommandInput;
    constructor(input: RegisterOnPremisesInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterOnPremisesInstanceCommandInput, RegisterOnPremisesInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

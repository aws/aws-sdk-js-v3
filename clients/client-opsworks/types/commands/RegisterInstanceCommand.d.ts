import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterInstanceRequest, RegisterInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterInstanceCommandInput = RegisterInstanceRequest;
export declare type RegisterInstanceCommandOutput = RegisterInstanceResult & __MetadataBearer;
export declare class RegisterInstanceCommand extends $Command<RegisterInstanceCommandInput, RegisterInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterInstanceCommandInput;
    constructor(input: RegisterInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterInstanceCommandInput, RegisterInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterRdsDbInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterRdsDbInstanceCommandInput = RegisterRdsDbInstanceRequest;
export declare type RegisterRdsDbInstanceCommandOutput = __MetadataBearer;
export declare class RegisterRdsDbInstanceCommand extends $Command<RegisterRdsDbInstanceCommandInput, RegisterRdsDbInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterRdsDbInstanceCommandInput;
    constructor(input: RegisterRdsDbInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterRdsDbInstanceCommandInput, RegisterRdsDbInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

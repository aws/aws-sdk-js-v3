import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssignInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssignInstanceCommandInput = AssignInstanceRequest;
export declare type AssignInstanceCommandOutput = __MetadataBearer;
export declare class AssignInstanceCommand extends $Command<AssignInstanceCommandInput, AssignInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: AssignInstanceCommandInput;
    constructor(input: AssignInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignInstanceCommandInput, AssignInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

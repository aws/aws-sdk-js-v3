import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UnassignInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnassignInstanceCommandInput = UnassignInstanceRequest;
export declare type UnassignInstanceCommandOutput = __MetadataBearer;
export declare class UnassignInstanceCommand extends $Command<UnassignInstanceCommandInput, UnassignInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UnassignInstanceCommandInput;
    constructor(input: UnassignInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnassignInstanceCommandInput, UnassignInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AssignTapePoolInput, AssignTapePoolOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssignTapePoolCommandInput = AssignTapePoolInput;
export declare type AssignTapePoolCommandOutput = AssignTapePoolOutput & __MetadataBearer;
export declare class AssignTapePoolCommand extends $Command<AssignTapePoolCommandInput, AssignTapePoolCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AssignTapePoolCommandInput;
    constructor(input: AssignTapePoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignTapePoolCommandInput, AssignTapePoolCommandOutput>;
    private serialize;
    private deserialize;
}
